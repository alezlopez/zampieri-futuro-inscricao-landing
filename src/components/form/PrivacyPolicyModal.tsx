
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal = ({ open, onOpenChange }: PrivacyPolicyModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-green-800 text-xl font-bold">
            Política de Privacidade
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-gray-700">
            <p>
              Este site é mantido e operado por ESCOLINHA DE EDUCAÇÃO INFANTIL PINGO DE OURO LTDA, CNPJ nº 55.704.506/0001-73
            </p>
            <p>
              Nós coletamos e utilizamos alguns dados pessoais que pertencem àqueles que utilizam nosso site. Ao fazê-lo, agimos na qualidade de controlador desses dados e estamos sujeitos às disposições da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).
            </p>
            <p>
              Nós cuidamos da proteção de seus dados pessoais e, por isso, disponibilizamos esta política de privacidade, que contém informações importantes sobre:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Quem deve utilizar nosso site</li>
              <li>Quais dados coletamos e o que fazemos com eles;</li>
              <li>Seus direitos em relação aos seus dados pessoais; e</li>
              <li>Como entrar em contato conosco.</li>
            </ul>

            <h3 className="text-green-800 font-bold text-lg mt-6">1. Dados que coletamos e motivos da coleta</h3>
            <p>Nosso site coleta e utiliza alguns dados pessoais de nossos usuários, de acordo com o disposto nesta seção.</p>
            
            <h4 className="text-green-700 font-semibold">1. Dados pessoais coletados</h4>
            <p>Nós coletamos os seguintes dados pessoais de nossos usuários:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>endereço IP;</li>
              <li>login, quando aplicado;</li>
              <li>ações efetuadas no Portal;</li>
              <li>ferramentas, funcionalidades e conteúdos acessados;</li>
              <li>datas e horários de cada ação e de acesso ao Portal;</li>
              <li>informações sobre o dispositivo utilizado, como versão de sistema operacional, navegador, e demais dados possíveis de serem coletados para garantir a prova de autoria e as obrigações resultantes das ações realizadas no ambiente;</li>
              <li>Session ID, quando disponível; ID de máquina, número de PIN e toda e qualquer informação necessária para a sua adequada identificação e autenticação.</li>
            </ul>

            <p>
              Além disso, usamos cookies, quando você visita nosso portal, para armazenar suas preferências pessoais quando navega na Internet. Todos os registros feitos poderão ser utilizados pelo Colégio, ou por quem de direito o representar, para o cumprimento das obrigações acordadas, para resguardar direitos, na hipótese de defesa em atos antiéticos, ilícitos ou contrários aos Termos de Uso cometidos pelo usuário ou por terceiro, ou ainda de alterações indevidas em seus sistemas e cadastros, ou ações que possam colocar em risco o Portal.
            </p>

            <h4 className="text-green-700 font-semibold">Finalidades da coleta:</h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>identificá-lo e autenticá-lo no seu acesso ao Portal;</li>
              <li>responder às eventuais dúvidas e solicitações;</li>
              <li>cumprir ordem legal ou judicial;</li>
              <li>constituir, defender ou exercer regularmente direitos em âmbito judicial ou administrativo;</li>
              <li>garantir a sua segurança e a dos administradores;</li>
              <li>manter atualizados os cadastros dos seus dados;</li>
              <li>promover os serviços do Colégio Zampieri;</li>
              <li>gerar análises e estudos educacionais e sociais;</li>
              <li>prestar informações aos órgãos reguladores;</li>
              <li>aperfeiçoar o uso e a experiência interativa durante a sua navegação no Portal.</li>
            </ul>

            <h3 className="text-green-800 font-bold text-lg mt-6">2. Dados sensíveis</h3>
            <p>
              Não serão coletados dados sensíveis de nossos usuários, assim entendidos aqueles definidos nos arts. 11 e seguintes da Lei de Proteção de Dados Pessoais. Assim, não haverá coleta de dados sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.
            </p>

            <h3 className="text-green-800 font-bold text-lg mt-6">3. Direitos do usuário</h3>
            <p>O usuário do site possui os seguintes direitos, conferidos pela Lei de Proteção de Dados Pessoais:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>confirmação da existência de tratamento;</li>
              <li>acesso aos dados;</li>
              <li>correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>portabilidade dos dados;</li>
              <li>eliminação dos dados pessoais tratados com o consentimento do titular;</li>
              <li>informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados;</li>
              <li>revogação do consentimento.</li>
            </ul>

            <h3 className="text-green-800 font-bold text-lg mt-6">4. Contato</h3>
            <p>Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade:</p>
            <ul className="list-none space-y-1 ml-4">
              <li><strong>E-mail:</strong> financeiro@colegiozampieri.com.br</li>
              <li><strong>Responsável:</strong> Alexandre Zampieri Lopez</li>
              <li><strong>Telefone:</strong> 11 5560-0601</li>
              <li><strong>Endereço:</strong> R. dos Acarapevas, 80 - Bal. São Francisco, São Paulo/SP, CEP: 04473-160</li>
            </ul>

            <p className="text-xs text-gray-500 mt-6">
              Última atualização: 06/10/2021
            </p>
          </div>
        </ScrollArea>
        <div className="flex justify-end pt-4">
          <DialogClose asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              Fechar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
