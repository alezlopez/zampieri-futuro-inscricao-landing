
import React, { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import PrivacyPolicyModal from './PrivacyPolicyModal';
import { RegistrationFormData } from '@/utils/formValidation';

interface ConsentCheckboxesProps {
  formData: RegistrationFormData;
  onInputChange: (field: string, value: string) => void;
}

const ConsentCheckboxes = ({ formData, onInputChange }: ConsentCheckboxesProps) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPrivacyModal(true);
  };

  return (
    <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-200">
      <div className="flex items-start space-x-3">
        <Checkbox
          id="privacyConsent"
          checked={formData.privacyConsent === 'true'}
          onCheckedChange={(checked) => onInputChange('privacyConsent', checked ? 'true' : 'false')}
          className="mt-1"
        />
        <div className="space-y-1 leading-none">
          <Label 
            htmlFor="privacyConsent" 
            className="text-sm font-medium text-green-800 cursor-pointer"
          >
            Ao enviar este formulário, eu concordo com os termos de{' '}
            <button
              type="button"
              onClick={handlePrivacyClick}
              className="text-green-600 underline hover:text-green-700 font-semibold"
            >
              política de privacidade
            </button>{' '}
            *
          </Label>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          id="contactConsent"
          checked={formData.contactConsent === 'true'}
          onCheckedChange={(checked) => onInputChange('contactConsent', checked ? 'true' : 'false')}
          className="mt-1"
        />
        <div className="space-y-1 leading-none">
          <Label 
            htmlFor="contactConsent" 
            className="text-sm font-medium text-green-800 cursor-pointer"
          >
            Autorizo contato da escola através dos contatos fornecidos *
          </Label>
        </div>
      </div>

      <PrivacyPolicyModal 
        open={showPrivacyModal} 
        onOpenChange={setShowPrivacyModal} 
      />
    </div>
  );
};

export default ConsentCheckboxes;
