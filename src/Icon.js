import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrash,
  faEllipsisV,
  faAngleRight,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

const Icon = (props) => {
  return <FontAwesomeIcon {...props} icon={props.icon} />;
};

export const TrashIcon = (props) => Icon({ ...props, icon: faTrash });
export const EllipsisV = (props) => Icon({ ...props, icon: faEllipsisV });
export const AngleDown = (props) => Icon({ ...props, icon: faAngleDown });
export const AngleRight = (props) => Icon({ ...props, icon: faAngleRight });
export const Pen = (props) => Icon({ ...props, icon: faPen });
