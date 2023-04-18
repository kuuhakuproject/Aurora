export class Command {
  constructor(it) {
    this.data = {
      name: it.data.name,
      description: it.data.description,
      dmPermission: false,
      type: it.data.type || 1,
      options: it.data.options || [],
      defaultMembersPermissions: it.data.permissions || []
    }
    this.category = it.category
  }
}
