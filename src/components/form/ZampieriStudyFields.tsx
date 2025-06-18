
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RegistrationFormData } from '@/utils/formValidation';

interface ZampieriStudyFieldsProps {
  formData: RegistrationFormData;
  onInputChange: (field: string, value: string) => void;
}

const ZampieriStudyFields = ({ formData, onInputChange }: ZampieriStudyFieldsProps) => {
  return (
    <>
      <div className="space-y-3">
        <Label className="text-green-800 font-medium">Atualmente estuda no Zampieri? *</Label>
        <RadioGroup
          value={formData.currentlyStudies}
          onValueChange={(value) => onInputChange('currentlyStudies', value)}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sim" id="currently-yes" />
            <Label htmlFor="currently-yes">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="não" id="currently-no" />
            <Label htmlFor="currently-no">Não</Label>
          </div>
        </RadioGroup>
      </div>

      {formData.currentlyStudies === 'não' && (
        <div className="space-y-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="space-y-3">
            <Label className="text-green-800 font-medium">Já estudou no Zampieri antes? *</Label>
            <RadioGroup
              value={formData.previouslyStudied}
              onValueChange={(value) => onInputChange('previouslyStudied', value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sim" id="previously-yes" />
                <Label htmlFor="previously-yes">Sim</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="não" id="previously-no" />
                <Label htmlFor="previously-no">Não</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSchool" className="text-green-800 font-medium">
              Escola Atual
            </Label>
            <Input
              id="currentSchool"
              value={formData.currentSchool}
              onChange={(e) => onInputChange('currentSchool', e.target.value)}
              placeholder="Nome da escola atual"
              className="border-green-300 focus:border-green-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ZampieriStudyFields;
