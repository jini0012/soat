interface KakaoAddressProps {
  onComplete: (data: {
    address: string;
    zonecode: string;
    roadAddress: string;
    jibunAddress: string;
    buildingName: string;
  }) => void;
  onClose?: () => void;
  buttonText?: string;
  className?: string;
}
