export const NavOptions = [
  {
    key: "Dashboard",
    value: "Dashboard",
    isSelected: true,
  },
  {
    key: "Send Review",
    value: "Send Review",
    isSelected: false,
  },
  {
    key: "Change settings",
    value: "Change settings",
    isSelected: false,
  },
  {
    key: "Contact us",
    value: "Contact us",
    isSelected: false,
  },
];

export interface MotelDetails {
  motelName: string;
  motelEmail: string;
  motelPhoneNumber: string;
  motelLocation?: string;
  userName?: string;
}

export interface UpdateProfileRequest {
  userName: string;
  motelEmail: string;
  motelName: string;
  motelPhoneNumber: string;
}
