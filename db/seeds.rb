Role.create(name: 'admin')
Role.create(name: 'supervisor')

admin = User.create(name: 'Addie Min', email: 'ad@min.com', password: 'password', password_confirmation: 'password')
UserRole.create(user: admin, role: Role.admin)

supervisor = User.create(name: 'Super Vizier', email: 'sup@er.com', password: 'password', password_confirmation: 'password')
UserRole.create(user: supervisor, role: Role.supervisor)

User.create(name: 'You Ser', email: 'u@ser.com', password: 'password', password_confirmation: 'password')
