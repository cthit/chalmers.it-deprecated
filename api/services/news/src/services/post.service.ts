import { User } from "../models/User";

export const canPostAs = (user: User, group_id: string): Boolean => {
    //TODO: Should group_id be superGroup.name, superGroup.id, group.name or group.id?
    const group = user.groups.find(g => g.superGroup.id == group_id);
    if (group && group.active) {
        return true;
    }
    return false;
};
