export type KakaoAddressData = {
  address: string;
  zonecode: string;
  roadAddress: string;
  jibunAddress: string;
  buildingName: string;
};

export interface KakaoAddressProps {
  onComplete: (data: KakaoAddressData) => void;
  onClose?: () => void;
  buttonText?: string;
  className?: string;
}
