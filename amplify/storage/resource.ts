import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive',
  access: (allow) => ({
    "public/*": [
      allow.guest.to(["read", "write", "delete"]),
      allow.authenticated.to(["read", "write", "delete"]),
    ],
    "public_readonly/*": [
      allow.guest.to(["read"]),
      allow.authenticated.to(["read", "write", "delete"]),
    ],
    "authenticated/*": [
      allow.authenticated.to(["read"]),
    ],
    "private/{entity_id}/*": [
      allow.entity("identity").to(["read", "write", "delete"]),
    ],
  }),
});
