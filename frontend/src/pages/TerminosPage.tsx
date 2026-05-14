import { LegalLayout } from '../components/layout/LegalLayout';

export function TerminosPage() {
  return (
    <LegalLayout
      code="VM-005 / LEGAL"
      titleLine1="Términos y"
      titleLine2="Condiciones"
      updatedAt="1 de junio de 2026"
      intro="Estos Términos y Condiciones regulan la prestación de servicios de mezcla (mixing) y masterización (mastering) de audio ofrecidos por VisionMob a través de visionmob.com. Al solicitar cualquiera de nuestros servicios, enviar el formulario de contacto o efectuar un pago, aceptas estos Términos en su totalidad."
    >
      {/* 1 */}
      <div className="lg-section">
        <h2>1. Las partes y el objeto del contrato</h2>
        <p>
          <strong>1.1</strong> VisionMob es un proyecto de servicios de audio profesional que ofrece mezcla y masterización a artistas emergentes a través de visionmob.com.
        </p>
        <p>
          <strong>1.2</strong> Se denomina <strong>"Cliente"</strong> a toda persona física o jurídica que solicite cualquiera de los servicios de VisionMob.
        </p>
        <p>
          <strong>1.3</strong> El objeto del presente contrato es la prestación de servicios de mezcla (mixing) y/o masterización (mastering) de audio conforme a las condiciones pactadas en cada encargo.
        </p>
        <p>
          <strong>1.4</strong> El Cliente declara ser mayor de 18 años o actuar bajo la debida representación legal de un menor.
        </p>
      </div>

      {/* 2 */}
      <div className="lg-section">
        <h2>2. Descripción de los servicios</h2>
        <p>
          <strong>2.1</strong> Los servicios de VisionMob incluyen la mezcla (mixing) y la masterización (mastering) de pistas de audio aportadas por el Cliente.
        </p>
        <p>
          <strong>2.2</strong> Los servicios <strong>no incluyen</strong> composición, grabación en estudio, distribución musical, registro de obras ante entidades de gestión, ni asesoramiento legal o fiscal.
        </p>
        <p>
          <strong>2.3</strong> Los precios oscilan entre <strong>10 € y 30 €</strong> por tema y serán confirmados por escrito antes de iniciar cualquier trabajo. No se realizará ningún cargo sin confirmación previa.
        </p>
        <p>
          <strong>2.4</strong> Los plazos de entrega se acordarán individualmente en cada encargo, en función de la carga de trabajo y la complejidad del proyecto.
        </p>
      </div>

      {/* 3 */}
      <div className="lg-section">
        <h2>3. Proceso de trabajo y política de revisiones</h2>
        <p>
          <strong>3.1</strong> El Cliente deberá aportar los archivos de audio en formatos recomendados WAV, AIFF o FLAC, a una frecuencia de muestreo mínima de 44,1 kHz, sin clipping ni saturación.
        </p>
        <p>
          <strong>3.2</strong> Cada encargo incluye un máximo de <strong>2 rondas de revisión</strong> sin coste adicional.
        </p>
        <p>
          <strong>3.3</strong> Las revisiones adicionales más allá de las incluidas se facturarán a <strong>5 € por ronda</strong>.
        </p>
        <p>
          <strong>3.4</strong> Los cambios de alcance que alteren sustancialmente el encargo original se tratarán como un nuevo encargo y se presupuestarán de forma independiente.
        </p>
        <p>
          <strong>3.5</strong> Si el Cliente no solicita ninguna revisión en un plazo de <strong>15 días naturales</strong> desde la entrega del material, se entenderá que ha aceptado tácitamente el resultado.
        </p>
      </div>

      {/* 4 */}
      <div className="lg-section">
        <h2>4. Material aportado por el Cliente y derechos de terceros</h2>
        <div className="lg-note" aria-label="Cláusula importante">
          ◆ Esta es la cláusula más importante. Léela con atención.
        </div>
        <p>
          <strong>4.1</strong> El Cliente declara y garantiza que:
        </p>
        <ul aria-label="Declaraciones del cliente sobre el material aportado">
          <li>Es el titular legítimo de todos los derechos sobre los archivos de audio aportados, o cuenta con las licencias y autorizaciones necesarias.</li>
          <li>El material no infringe derechos de propiedad intelectual, industrial ni derechos conexos de terceros.</li>
          <li>No existen cargas, gravámenes ni litigios pendientes que afecten al material aportado.</li>
          <li>Ha obtenido las autorizaciones pertinentes de todos los artistas, productores y titulares de derechos involucrados.</li>
        </ul>
        <p>
          <strong>4.2</strong> VisionMob actúa exclusivamente como prestador de servicios técnicos y no verifica ni asume responsabilidad alguna sobre la titularidad o licencia del material aportado por el Cliente.
        </p>
        <p>
          <strong>4.3</strong> El Cliente asume de forma íntegra y exclusiva cualquier responsabilidad civil, penal o administrativa derivada del incumplimiento de los derechos de terceros.
        </p>
        <p>
          <strong>4.4</strong> El Cliente se compromete a mantener indemne a VisionMob frente a cualquier reclamación, demanda, sanción o gasto, incluidos honorarios legales, derivados del incumplimiento de lo dispuesto en esta cláusula.
        </p>
        <p>
          <strong>4.5</strong> VisionMob se reserva el derecho a rechazar o suspender cualquier encargo si tuviera indicios razonables de que el material aportado infringe derechos de terceros.
        </p>
        <p>
          <strong>4.6</strong> En caso de recibir una reclamación relacionada con el material del Cliente, VisionMob notificará al Cliente en el plazo de <strong>7 días hábiles</strong>.
        </p>
      </div>

      {/* 5 */}
      <div className="lg-section">
        <h2>5. Derechos sobre el trabajo entregado</h2>
        <p>
          <strong>5.1</strong> Una vez efectuado el pago íntegro del servicio, VisionMob cede al Cliente todos los derechos de explotación sobre las pistas mezcladas y/o masterizadas.
        </p>
        <p>
          <strong>5.2</strong> VisionMob se reserva el derecho a utilizar fragmentos del trabajo entregado con fines promocionales propios, incluyendo:
        </p>
        <ul aria-label="Usos promocionales reservados por VisionMob">
          <li>Publicaciones en el sitio web visionmob.com.</li>
          <li>Publicaciones en redes sociales del estudio.</li>
          <li>Inclusión en la newsletter VisionLetter.</li>
        </ul>
        <p>
          <strong>5.3</strong> El Cliente puede oponerse al uso promocional notificándolo por escrito antes de la entrega o en los <strong>15 días naturales</strong> siguientes a la misma.
        </p>
        <p>
          <strong>5.4</strong> Se recomienda incluir el crédito <strong>"Mix &amp; Master por VisionMob"</strong> en las plataformas de distribución, aunque no es obligatorio.
        </p>
      </div>

      {/* 6 */}
      <div className="lg-section">
        <h2>6. Pago, impago y consecuencias</h2>
        <p>
          <strong>6.1</strong> Los métodos de pago aceptados son: Bizum, transferencia bancaria y PayPal.
        </p>
        <p>
          <strong>6.2</strong> El modelo de pago habitual es <strong>pago tras resultado</strong>: el Cliente recibe el preview y, si está conforme, efectúa el pago para recibir el archivo final de alta calidad.
        </p>
        <p>
          <strong>6.3</strong> VisionMob retiene el master final hasta la confirmación del pago íntegro.
        </p>
        <p>
          <strong>6.4</strong> En caso de impago transcurridos <strong>30 días</strong> desde la entrega del preview, VisionMob podrá:
        </p>
        <ul aria-label="Consecuencias del impago">
          <li>Reclamar la cantidad adeudada por vía judicial o extrajudicial.</li>
          <li>Utilizar el material entregado con fines promocionales sin posibilidad de oposición posterior.</li>
          <li>Repercutir los costes de gestión derivados del cobro.</li>
          <li>Rechazar futuros encargos del mismo Cliente.</li>
        </ul>
        <p>
          <strong>6.5</strong> En caso de cancelación por parte del Cliente una vez iniciado el trabajo, se facturará un mínimo del <strong>50 % del precio pactado</strong> en concepto de trabajos realizados.
        </p>
      </div>

      {/* 7 */}
      <div className="lg-section">
        <h2>7. Limitación de responsabilidad</h2>
        <p>
          <strong>7.1</strong> VisionMob no garantiza un resultado artístico determinado, ya que la percepción estética es subjetiva y depende de factores ajenos al servicio técnico prestado.
        </p>
        <p>
          <strong>7.2</strong> VisionMob no será responsable de daños indirectos, pérdida de beneficios, pérdida de oportunidades comerciales ni lucro cesante derivados del uso o resultado del servicio.
        </p>
        <p>
          <strong>7.3</strong> La responsabilidad máxima de VisionMob frente al Cliente quedará limitada al importe efectivamente pagado por el servicio en cuestión.
        </p>
        <p>
          <strong>7.4</strong> Los archivos de audio aportados por el Cliente serán conservados durante un máximo de <strong>30 días naturales</strong> tras la entrega. Transcurrido ese plazo, podrán ser eliminados sin previo aviso.
        </p>
      </div>

      {/* 8 */}
      <div className="lg-section">
        <h2>8. Protección de datos personales</h2>
        <p>
          <strong>8.1</strong> El tratamiento de los datos personales del Cliente se realiza conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
        </p>
        <p>
          <strong>8.2</strong> Los datos se tratarán exclusivamente para la gestión del encargo, la comunicación con el Cliente y el cumplimiento de las obligaciones legales derivadas de la prestación del servicio.
        </p>
        <p>
          <strong>8.3</strong> El Cliente puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad dirigiéndose a <strong>visionmobbusiness@gmail.com</strong>.
        </p>
        <p>
          <strong>8.4</strong> Para más información, consulta nuestra <strong>Política de Privacidad</strong> disponible en visionmob.com/privacidad.
        </p>
      </div>

      {/* 9 */}
      <div className="lg-section">
        <h2>9. Modificaciones de los Términos</h2>
        <p>
          VisionMob se reserva el derecho a modificar estos Términos y Condiciones en cualquier momento. La versión vigente será siempre la publicada en visionmob.com/terminos. El uso continuado de los servicios tras la publicación de cambios implica la aceptación de los mismos.
        </p>
      </div>

      {/* 10 */}
      <div className="lg-section">
        <h2>10. Legislación aplicable y jurisdicción</h2>
        <p>
          <strong>10.1</strong> Los presentes Términos se rigen por la legislación española.
        </p>
        <p>
          <strong>10.2</strong> Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio del consumidor, conforme a la normativa de protección de consumidores y usuarios.
        </p>
        <p>
          <strong>10.3</strong> Si alguna cláusula de estos Términos fuera declarada nula o ineficaz, el resto mantendrá plena vigencia.
        </p>
      </div>

      {/* 11 */}
      <div className="lg-section">
        <h2>11. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos en:
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:visionmobbusiness@gmail.com">visionmobbusiness@gmail.com</a>
          <br />
          <strong>Web:</strong>{' '}
          <a href="https://visionmob.com" target="_blank" rel="noopener noreferrer">visionmob.com</a>
        </p>
      </div>

      <div className="lg-closing" role="note">
        <p>
          Al marcar la casilla de aceptación en el formulario de contacto, o al efectuar el pago del servicio,
          el Cliente declara haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones.
        </p>
      </div>
    </LegalLayout>
  );
}
