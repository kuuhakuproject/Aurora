export class Command {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.dmPermission = data.dmPermission || false
    this.type = data.type || 1
    this.options = data.options || []
    this.defaultMembersPermissions = data.permissions || []
  }
}
