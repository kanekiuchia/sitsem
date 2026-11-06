// Validación de documentación en el navegador. No sube ni almacena archivos.
(() => {
 const $ = id => document.getElementById(id);
 const form = $('documentosForm');
 const tipos = ['application/pdf','image/jpeg','image/png'];
 const validarArchivos = input => {
  for(const archivo of input.files){
   if(!tipos.includes(archivo.type)) return `Formato no permitido en ${input.previousElementSibling?.textContent || input.id}.`;
   if(archivo.size > 10*1024*1024) return `El archivo ${archivo.name} supera 10 MB.`;
  }
  return null;
 };
 function actualizar(){
  const moral = $('tipoPersona').value === 'moral';
  document.querySelectorAll('[data-moral]').forEach(el => {el.classList.toggle('doc-hidden',!moral);el.querySelector('input').required=moral;});
  const fiscal = $('fiscalAplica').value === 'si';
  $('fiscalBox').classList.toggle('doc-hidden',!fiscal);$('fiscalDoc').required=fiscal;
  $('propiedadLabel').textContent = ({renta:'Contrato de arrendamiento *',propio:'Escritura o comprobante de propiedad *',otro:'Documento que acredite la posesión *'})[$('tenencia').value];
 }
 ['tipoPersona','fiscalAplica','tenencia'].forEach(id=>$(id).addEventListener('change',actualizar));
 form.addEventListener('submit',event=>{
  event.preventDefault();
  const fecha = $('fechaDomicilio').value;
  const hoy = new Date(); hoy.setHours(0,0,0,0);
  const limite = new Date(hoy); const dia=limite.getDate(); limite.setDate(1); limite.setMonth(limite.getMonth()-3); limite.setDate(Math.min(dia,new Date(limite.getFullYear(),limite.getMonth()+1,0).getDate()));
  const emitida = new Date(fecha+'T12:00:00');
  const errores=[];
  if(!fecha || emitida < limite || emitida > new Date(hoy.getTime()+12*60*60*1000)) errores.push('El comprobante de domicilio debe tener una fecha válida y no superar 3 meses.');
  form.querySelectorAll('input[type="file"]').forEach(input=>{if(input.required&&!input.files.length) errores.push(`Falta el archivo: ${input.id}.`); const error=validarArchivos(input);if(error) errores.push(error);});
  $('documentosEstado').textContent = errores.length ? 'Revisión pendiente:\n'+errores.join('\n') : 'Documentación seleccionada y validada correctamente. Aún no se ha enviado ni guardado en un servidor.';
  $('documentosEstado').style.color=errores.length?'#a00028':'#17683b';
 });
 form.addEventListener('reset',()=>{setTimeout(actualizar,0);$('documentosEstado').textContent='';});
 actualizar();
})();
