import { Address, RealEstate } from "../entities";
import { AppError } from "../errors";
import { RealEstateCreate, RealEstateRead } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const create = async (payload: RealEstateCreate): Promise<RealEstate> => {
  const category = await categoryRepo.findOneBy({ id: payload.categoryId });

  const existingAddress: Address | null = await addressRepo.findOne({
    where: {
      number: payload.address.number,
    },
  });

  if (existingAddress) {
    throw new AppError("Address already exists", 409);
  }

  const address: Address = addressRepo.create({
    ...payload.address,
  });
  await addressRepo.save(address);

  const realEstatePayload = {
    ...payload,
    address: address,
    category: category!,
  };

  const realEstate: RealEstate = realEstateRepo.create(realEstatePayload);

  await realEstateRepo.save(realEstate);

  return realEstate;
};

const read = async (): Promise<RealEstateRead> => {
  return await realEstateRepo.find({
    relations: {
      address: true,
    },
  });
};

export default { create, read };
