import { User } from "../../models/index.js";

/**
 * Lida com request de usuários
 */
export async function listUser(request, response) {
  const newUser = await User.findAll();
  return response.status(200).json(newUser);
}
