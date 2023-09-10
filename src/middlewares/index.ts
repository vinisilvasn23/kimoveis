import { handleErrors } from "./handleErrors.middleware";
import { validateBody } from "./validateBody.middleware";
import { verifyIdExists } from "./verifyIdExists.middleware";
import { validateAdmin } from "./validateAdmin.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { verifyEmailExists } from "./verifyEmailExists.middleware";
import { verifyExistsUser } from "./verifyExistsUser";
import { verifyCategoryExists } from "./verifyCategoryExists.middlewares";
import { verifyUserPermission } from "./verifyUserPermission.middleware";

export default {
    handleErrors,
    validateBody,
    verifyIdExists,
    validateAdmin,
    verifyToken,
    verifyEmailExists,
    verifyExistsUser,
    verifyCategoryExists,
    verifyUserPermission
}