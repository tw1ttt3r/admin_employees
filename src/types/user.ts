import { ROLES } from "@config/roles.types";

type user = {
  id_usuario?: string;
  nombre?: string;
  ap_paterno?: string;
  ap_materno?: string;
  alta?: string;
  correo?: string;
  telefono?: string;
  id_rol?: ROLES;
}

export default user;
