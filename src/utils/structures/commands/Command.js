import { PermissionFlagsBits } from 'discord.js'

function check_permission(perm) {
  if (typeof perm !== 'object' || perm === undefined) {
    return null
  } else {
    let permissions = 0n
    perm.forEach(p => permissions += PermissionFlagsBits[p])
    return permissions
  }
}

export class Command {
  constructor(it) {
    this.data = {
      name: it.data.name,
      description: it.data.description,
      dmPermission: false,
      type: it.data.type || 1,
      options: it.data.options || [],
      defaultMemberPermissions: check_permission(it.data.permissions)
    }
    this.category = it.category
  }
}
