
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from '@/utils/formValidation';

interface ResponsibleFieldsProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
}

const ResponsibleFields = ({ formData, onInputChange }: ResponsibleFieldsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="responsibleName" className="text-green-800 font-medium">
          Nome do Responsável *
        </Label>
        <Input
          id="responsibleName"
          value={formData.responsibleName}
          onChange={(e) => onInputChange('responsibleName', e.target.value)}
          placeholder="Nome completo do responsável"
          className="border-green-300 focus:border-green-500"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-green-800 font-medium">
          Celular *
        </Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => onInputChange('phone', e.target.value)}
          placeholder="+55 11 99999-9999"
          className="border-green-300 focus:border-green-500"
          required
        />
      </div>
    </div>
  );
};

export default ResponsibleFields;
