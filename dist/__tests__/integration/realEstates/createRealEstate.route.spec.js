"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../../app"));
const data_source_1 = require("../../../data-source");
const entities_1 = require("../../../entities");
const mocks_1 = require("../../mocks");
describe('POST /realEstate', () => {
    let connection;
    const baseUrl = '/realEstate';
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield data_source_1.AppDataSource.initialize()
            .then((res) => (connection = res))
            .catch((error) => console.error(error));
    }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection.destroy();
    }));
    it('Success: Must be able to create real estates - Admin token - Full body', () => __awaiter(void 0, void 0, void 0, function* () {
        const _a = mocks_1.createRealEstateRouteMock.realEstateComplete, { categoryToCreate } = _a, payload = __rest(_a, ["categoryToCreate"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.genToken(true, 1)}`)
            .send(Object.assign(Object.assign({}, payload), { categoryId: category.id }));
        const expectResults = {
            status: 201,
            expectBody: Object.assign(Object.assign({}, payload), { category }),
        };
        expect(response.body).toEqual(expect.objectContaining(expectResults.expectBody));
        expect(response.status).toBe(expectResults.status);
    }));
    it('Error: Must not be able to create real estates - Admin token - Unique address', () => __awaiter(void 0, void 0, void 0, function* () {
        const _b = mocks_1.createRealEstateRouteMock.realEstateUnique, { categoryToCreate } = _b, payload = __rest(_b, ["categoryToCreate"]);
        const { address: addressInfo } = payload, realEstateInfo = __rest(payload, ["address"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        yield data_source_1.AppDataSource.getRepository(entities_1.Address).save(addressInfo);
        yield data_source_1.AppDataSource.getRepository(entities_1.RealEstate).save(realEstateInfo);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.genToken(true, 1)}`)
            .send(Object.assign(Object.assign({}, payload), { categoryId: category.id }));
        const expectResults = {
            status: 409,
            expectBody: { message: 'Address already exists' },
        };
        expect(response.body).toEqual(expectResults.expectBody);
        expect(response.status).toBe(expectResults.status);
    }));
    it('Error: Must not be able to create real estates - Admin token - Invalid body', () => __awaiter(void 0, void 0, void 0, function* () {
        const _c = mocks_1.createRealEstateRouteMock.realEstateInvalidBody, { categoryToCreate } = _c, realEstateInfo = __rest(_c, ["categoryToCreate"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.genToken(true, 1)}`)
            .send(Object.assign(Object.assign({}, realEstateInfo), { categoryId: category.id }));
        const expectResults = {
            status: 400,
            expectBody: {
                flattenMessage: {
                    message: {
                        address: [
                            'Expected string, received array',
                            'String must contain at most 8 character(s)',
                            'Required',
                            'Expected string, received object',
                            'String must contain at most 2 character(s)',
                        ],
                        size: ['Number must be greater than 0'],
                    },
                },
                errorsMessage: {
                    message: [
                        {
                            code: 'too_small',
                            minimum: 0,
                            type: 'number',
                            inclusive: false,
                            exact: false,
                            message: 'Number must be greater than 0',
                            path: ['size'],
                        },
                        {
                            code: 'invalid_type',
                            expected: 'string',
                            received: 'array',
                            path: ['address', 'street'],
                            message: 'Expected string, received array',
                        },
                        {
                            code: 'too_big',
                            maximum: 8,
                            type: 'string',
                            inclusive: true,
                            exact: false,
                            message: 'String must contain at most 8 character(s)',
                            path: ['address', 'zipCode'],
                        },
                        {
                            code: 'invalid_type',
                            expected: 'number',
                            message: 'Required',
                            path: ['address', 'number'],
                            received: 'undefined',
                        },
                        {
                            code: 'invalid_type',
                            expected: 'string',
                            received: 'object',
                            path: ['address', 'city'],
                            message: 'Expected string, received object',
                        },
                        {
                            code: 'too_big',
                            maximum: 2,
                            type: 'string',
                            inclusive: true,
                            exact: false,
                            message: 'String must contain at most 2 character(s)',
                            path: ['address', 'state'],
                        },
                    ],
                },
            },
        };
        if (Array.isArray(response.body.message)) {
            expect(response.body).toStrictEqual(expectResults.expectBody.errorsMessage);
        }
        else {
            expect(response.body).toStrictEqual(expectResults.expectBody.flattenMessage);
        }
        expect(response.status).toBe(expectResults.status);
    }));
    it('Error: Must not be able to create real estates - Admin token - Invalid body 2', () => __awaiter(void 0, void 0, void 0, function* () {
        const _d = mocks_1.createRealEstateRouteMock.realEstateInvalidBody2, { categoryToCreate } = _d, realEstateInfo = __rest(_d, ["categoryToCreate"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.genToken(true, 1)}`)
            .send(Object.assign(Object.assign({}, realEstateInfo), { categoryId: category.id }));
        const expectResults = {
            status: 400,
            expectBody: {
                flattenMessage: {
                    message: {
                        address: ['Required'],
                        size: ['Required'],
                    },
                },
                errorsMessage: {
                    message: [
                        {
                            code: 'invalid_type',
                            expected: 'number',
                            received: 'undefined',
                            path: ['size'],
                            message: 'Required',
                        },
                        {
                            code: 'invalid_type',
                            expected: 'object',
                            received: 'undefined',
                            path: ['address'],
                            message: 'Required',
                        },
                    ],
                },
            },
        };
        if (Array.isArray(response.body.message)) {
            expect(response.body).toStrictEqual(expectResults.expectBody.errorsMessage);
        }
        else {
            expect(response.body).toStrictEqual(expectResults.expectBody.flattenMessage);
        }
        expect(response.status).toBe(expectResults.status);
    }));
    it('Error: Must be not able to create real estates - User token', () => __awaiter(void 0, void 0, void 0, function* () {
        const _e = mocks_1.createRealEstateRouteMock.realEstateAddressWithoutNumber, { categoryToCreate, address } = _e, realEstateInfo = __rest(_e, ["categoryToCreate", "address"]);
        const { number } = address, addressInfo = __rest(address, ["number"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.genToken(false, 1)}`)
            .send(Object.assign(Object.assign({}, realEstateInfo), { address: addressInfo, categoryId: category.id }));
        expect(response.body).toEqual(mocks_1.errorsMock.forbidden.error);
        expect(response.status).toBe(mocks_1.errorsMock.forbidden.status);
    }));
    it('Error: Must be not able to create real estates - Missing bearer', () => __awaiter(void 0, void 0, void 0, function* () {
        const _f = mocks_1.createRealEstateRouteMock.realEstateAddressWithoutNumber, { categoryToCreate, address } = _f, realEstateInfo = __rest(_f, ["categoryToCreate", "address"]);
        const { number } = address, addressInfo = __rest(address, ["number"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .send(Object.assign(Object.assign({}, realEstateInfo), { address: addressInfo, categoryId: category.id }));
        expect(response.body).toEqual(mocks_1.errorsMock.missingBearer.error);
        expect(response.status).toBe(mocks_1.errorsMock.missingBearer.status);
    }));
    it('Error: Must be not able to create real estates - Invalid signature', () => __awaiter(void 0, void 0, void 0, function* () {
        const _g = mocks_1.createRealEstateRouteMock.realEstateAddressWithoutNumber, { categoryToCreate, address } = _g, realEstateInfo = __rest(_g, ["categoryToCreate", "address"]);
        const { number } = address, addressInfo = __rest(address, ["number"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.invalidSignature}`)
            .send(Object.assign(Object.assign({}, realEstateInfo), { address: addressInfo, categoryId: category.id }));
        expect(response.body).toEqual(mocks_1.errorsMock.invalidSignature.error);
        expect(response.status).toBe(mocks_1.errorsMock.invalidSignature.status);
    }));
    it('Error: Must be not able to create real estates - JWT malformed', () => __awaiter(void 0, void 0, void 0, function* () {
        const _h = mocks_1.createRealEstateRouteMock.realEstateAddressWithoutNumber, { categoryToCreate, address } = _h, realEstateInfo = __rest(_h, ["categoryToCreate", "address"]);
        const { number } = address, addressInfo = __rest(address, ["number"]);
        const category = yield data_source_1.AppDataSource.getRepository(entities_1.Category).save(categoryToCreate);
        const response = yield (0, supertest_1.default)(app_1.default)
            .post(baseUrl)
            .set('Authorization', `Bearer ${mocks_1.tokenMock.jwtMalformed}`)
            .send(Object.assign(Object.assign({}, realEstateInfo), { address: addressInfo, categoryId: category.id }));
        expect(response.body).toEqual(mocks_1.errorsMock.jwtMalformed.error);
        expect(response.status).toBe(mocks_1.errorsMock.jwtMalformed.status);
    }));
});
