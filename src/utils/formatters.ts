
export const formatPhone = (value: string) => {
  // Remove todos os caracteres não numéricos, exceto o +
  const numbers = value.replace(/[^\d+]/g, '');
  
  // Se não começar com +55, adiciona
  if (!numbers.startsWith('+55')) {
    const onlyNumbers = numbers.replace(/\D/g, '');
    if (onlyNumbers.length === 0) {
      return '+55 ';
    }
    return `+55 ${onlyNumbers}`;
  }
  
  // Remove o +55 para formatar apenas os números restantes
  const phoneNumbers = numbers.substring(3);
  
  // Formata: +55 XX XXXXX-XXXX
  if (phoneNumbers.length <= 2) {
    return `+55 ${phoneNumbers}`;
  } else if (phoneNumbers.length <= 7) {
    return `+55 ${phoneNumbers.substring(0, 2)} ${phoneNumbers.substring(2)}`;
  } else {
    return `+55 ${phoneNumbers.substring(0, 2)} ${phoneNumbers.substring(2, 7)}-${phoneNumbers.substring(7, 11)}`;
  }
};

export const formatCPF = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  const formatted = numbers.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  return formatted.length <= 14 ? formatted : value;
};
