const ZampieriLogo = ({
  className = ""
}: {
  className?: string;
}) => {
  return <div className={`flex items-center gap-3 ${className}`}>
      <img src="/lovable-uploads/8716b73d-60f6-4f0f-90ed-3e99b3ba6105.png" alt="Brasão Colégio Zampieri" className="h-16 w-auto" />
      <div className="text-left">
        <h1 className="text-2xl font-bold text-slate-50">Colégio Zampieri</h1>
        <p className="text-sm text-green-600">Excelência em Educação</p>
      </div>
    </div>;
};
export default ZampieriLogo;