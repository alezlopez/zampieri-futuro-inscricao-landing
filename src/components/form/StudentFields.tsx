
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RegistrationFormData, grades, timePreferences } from '@/utils/formValidation';

interface StudentFieldsProps {
  formData: RegistrationFormData;
  onInputChange: (field: string, value: string) => void;
}

const StudentFields = ({ formData, onInputChange }: StudentFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-green-800 font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            placeholder="seu@email.com"
            className="border-green-300 focus:border-green-500"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf" className="text-green-800 font-medium">
            CPF *
          </Label>
          <Input
            id="cpf"
            value={formData.cpf}
            onChange={(e) => onInputChange('cpf', e.target.value)}
            placeholder="123.456.789-10"
            className="border-green-300 focus:border-green-500"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="studentName" className="text-green-800 font-medium">
          Nome Completo do Aluno *
        </Label>
        <Input
          id="studentName"
          value={formData.studentName}
          onChange={(e) => onInputChange('studentName', e.target.value)}
          placeholder="Nome completo do aluno"
          className="border-green-300 focus:border-green-500"
          required
        />
      </div>

      <div className="space-y-2">
        <Label className="text-green-800 font-medium">Série de Interesse *</Label>
        <Select value={formData.grade} onValueChange={(value) => onInputChange('grade', value)}>
          <SelectTrigger className="border-green-300 focus:border-green-500">
            <SelectValue placeholder="Selecione a série" />
          </SelectTrigger>
          <SelectContent>
            {grades.map((grade) => (
              <SelectItem key={grade} value={grade}>
                {grade}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-green-800 font-medium">Horário de Interesse *</Label>
        <Select value={formData.timePreference} onValueChange={(value) => onInputChange('timePreference', value)}>
          <SelectTrigger className="border-green-300 focus:border-green-500">
            <SelectValue placeholder="Selecione o horário" />
          </SelectTrigger>
          <SelectContent>
            {timePreferences.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default StudentFields;
