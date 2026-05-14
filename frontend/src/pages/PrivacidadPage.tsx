import { LegalLayout } from '../components/layout/LegalLayout';

export function PrivacidadPage() {
  return (
    <LegalLayout
      code="VM-006 / LEGAL"
      titleLine1="Política de"
      titleLine2="Privacidad"
      updatedAt="1 de junio de 2026"
      intro="En VisionMob nos tomamos en serio tu privacidad. Esta política explica qué datos recogemos, por qué los recogemos, cómo los usamos y qué derechos tienes sobre ellos. Redactada conforme al RGPD (UE) 2016/679 y la LOPDGDD 3/2018."
    >
      {/* 1 */}
      <div className="lg-section">
        <h2>1. Quién es el responsable del tratamiento</h2>
        <p>
          <strong>VisionMob</strong> es el responsable del tratamiento de tus datos personales.
        </p>
        <ul aria-label="Datos de contacto del responsable">
          <li><strong>Proyecto:</strong> VisionMob</li>
          <li><strong>Web:</strong> visionmob.com</li>
          <li>
            <strong>Email de contacto:</strong>{' '}
            <a href="mailto:visionmobbusiness@gmail.com">visionmobbusiness@gmail.com</a>
          </li>
        </ul>
        <p>
          Respondemos a cualquier solicitud relacionada con tus datos en un plazo máximo de <strong>30 días</strong>.
        </p>
      </div>

      {/* 2 */}
      <div className="lg-section">
        <h2>2. Qué datos recogemos y cuándo</h2>
        <h3>2.1 Datos que tú nos das</h3>
        <p>
          Cuando rellenas el formulario de contacto o solicitas un servicio, nos proporcionas:
        </p>
        <ul aria-label="Datos facilitados por el usuario">
          <li><strong>Obligatorios:</strong> email, nombre, nombre artístico.</li>
          <li><strong>Opcionales:</strong> descripción del proyecto, archivos de audio, fecha de entrega deseada.</li>
        </ul>
        <h3>2.2 Datos recogidos automáticamente</h3>
        <p>
          Recogemos datos de uso de forma automática mediante <strong>Umami</strong>, una herramienta de analítica web auto-hospedada en nuestros servidores:
        </p>
        <ul aria-label="Datos recogidos automáticamente">
          <li>Dirección IP anonimizada (no almacenamos la IP completa).</li>
          <li>Tipo de navegador y sistema operativo.</li>
          <li>Páginas visitadas y tiempo de visita.</li>
        </ul>
        <p>
          Umami no utiliza cookies de seguimiento y no comparte datos con terceros.
        </p>
        <h3>2.3 Lo que no recogemos</h3>
        <ul aria-label="Datos que VisionMob no recoge">
          <li>No usamos Google Analytics ni Meta Pixel.</li>
          <li>No vendemos tus datos a terceros.</li>
          <li>No utilizamos cookies publicitarias ni de seguimiento entre sitios.</li>
        </ul>
      </div>

      {/* 3 */}
      <div className="lg-section">
        <h2>3. Para qué usamos tus datos y por qué podemos hacerlo</h2>
        <p>
          <strong>3.1 Prestar el servicio contratado.</strong> Tratamos tus datos para gestionar el encargo de mezcla y/o masterización. Base jurídica: ejecución de un contrato (art. 6.1.b RGPD).
        </p>
        <p>
          <strong>3.2 Cumplimiento de obligaciones legales.</strong> Conservamos determinados datos para cumplir obligaciones fiscales y contables. Base jurídica: obligación legal (art. 6.1.c RGPD).
        </p>
        <p>
          <strong>3.3 Promoción y portfolio.</strong> Podemos usar fragmentos del trabajo entregado para mostrar nuestro portfolio en la web y redes sociales. Base jurídica: interés legítimo (art. 6.1.f RGPD). Puedes oponerte en cualquier momento.
        </p>
        <p>
          <strong>3.4 Consultas y soporte.</strong> Usamos tu email y nombre para responder a tus consultas y gestionar incidencias. Base jurídica: ejecución de contrato e interés legítimo (art. 6.1.b y 6.1.f RGPD).
        </p>
      </div>

      {/* 4 */}
      <div className="lg-section">
        <h2>4. Cuánto tiempo conservamos tus datos</h2>
        <ul aria-label="Plazos de conservación de datos">
          <li><strong>Datos del formulario de contacto:</strong> 4 años desde la última interacción.</li>
          <li><strong>Archivos de audio:</strong> 30 días naturales tras la entrega del trabajo final.</li>
          <li><strong>Contenido de portfolio:</strong> mientras se utilice con fines promocionales, con posibilidad de retirada a petición del Cliente.</li>
          <li><strong>Datos de analítica Umami:</strong> 12 meses en formato anonimizado.</li>
          <li><strong>Documentación fiscal:</strong> hasta 6 años conforme a la normativa tributaria española.</li>
        </ul>
      </div>

      {/* 5 */}
      <div className="lg-section">
        <h2>5. Con quién compartimos tus datos</h2>
        <p>
          <strong>5.1 Hetzner Online GmbH</strong> — proveedor de servidores. Servidor ubicado en Alemania, dentro del Espacio Económico Europeo. No implica transferencia internacional de datos.
        </p>
        <p>
          <strong>5.2 Cloudflare R2</strong> — almacenamiento de archivos de audio. Cloudflare Inc. (EEUU). Transferencia cubierta por el <em>EU-U.S. Data Privacy Framework</em> y Cláusulas Contractuales Tipo de la Comisión Europea.
        </p>
        <p>
          <strong>5.3 Proveedor de correo electrónico</strong> — pendiente de confirmar. Será comunicado y actualizado en esta Política cuando se determine.
        </p>
        <p>
          <strong>5.4 Autoridades públicas</strong> — cuando así lo exija la ley española o europea aplicable.
        </p>
      </div>

      {/* 6 */}
      <div className="lg-section">
        <h2>6. Transferencias internacionales de datos</h2>
        <p>
          La única transferencia internacional de datos que realizamos actualmente es la relativa al almacenamiento de archivos de audio en <strong>Cloudflare R2</strong> (EEUU). Esta transferencia se realiza al amparo del <em>EU-U.S. Data Privacy Framework</em> y de las Cláusulas Contractuales Tipo adoptadas por la Comisión Europea, garantizando un nivel de protección equivalente al exigido en el EEE.
        </p>
        <p>
          Todos los datos en tránsito y en reposo están cifrados mediante protocolos estándar de la industria.
        </p>
      </div>

      {/* 7 */}
      <div className="lg-section">
        <h2>7. Qué derechos tienes sobre tus datos</h2>
        <p>Tienes derecho a:</p>
        <ul aria-label="Derechos del interesado sobre sus datos personales">
          <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti.</li>
          <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
          <li><strong>Supresión (derecho al olvido):</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
          <li><strong>Oposición:</strong> oponerte al tratamiento basado en interés legítimo.</li>
          <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento en determinados supuestos.</li>
          <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado y de uso común.</li>
          <li><strong>Retirar el consentimiento</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
          <li><strong>No ser objeto de decisiones automatizadas</strong> con efectos jurídicos significativos.</li>
        </ul>
        <p>
          <strong>7.1</strong> Para ejercer cualquiera de estos derechos, escríbenos a{' '}
          <a href="mailto:visionmobbusiness@gmail.com">visionmobbusiness@gmail.com</a> adjuntando una copia de tu DNI u documento identificativo equivalente. Responderemos en un plazo máximo de <strong>30 días</strong>.
        </p>
        <p>
          <strong>7.2</strong> Si consideras que el tratamiento de tus datos no es conforme a la normativa, tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>:{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a> — C/ Jorge Juan 6, 28001 Madrid.
        </p>
      </div>

      {/* 8 */}
      <div className="lg-section">
        <h2>8. Cómo protegemos tus datos</h2>
        <p>Aplicamos las siguientes medidas técnicas y organizativas:</p>
        <ul aria-label="Medidas de seguridad aplicadas">
          <li>Comunicaciones cifradas mediante <strong>HTTPS/TLS</strong> en todo el sitio web.</li>
          <li>Cifrado en reposo de los datos almacenados en servidor y en Cloudflare R2.</li>
          <li>Acceso restringido con autenticación multifactor para el personal autorizado.</li>
          <li>Copias de seguridad cifradas y periódicas.</li>
          <li>Actualizaciones de seguridad del software aplicadas regularmente.</li>
        </ul>
        <p>
          En caso de brecha de seguridad que pueda afectar a tus derechos, lo comunicaremos a la AEPD en un plazo máximo de <strong>72 horas</strong> y a los afectados sin dilación indebida.
        </p>
      </div>

      {/* 9 */}
      <div className="lg-section">
        <h2>9. Menores de edad</h2>
        <p>
          Los servicios de VisionMob están dirigidos a mayores de 18 años. Si eres menor de edad, necesitas el consentimiento de tu representante legal para contratar nuestros servicios.
        </p>
        <p>
          No recogemos datos de menores de 14 años sin el consentimiento expreso de sus padres o tutores legales, conforme al artículo 7 de la LOPDGDD.
        </p>
        <p>
          Si detectamos que hemos recogido datos de un menor sin las debidas autorizaciones, procederemos a su eliminación inmediata. Para notificarnos cualquier situación de este tipo, escríbenos a{' '}
          <a href="mailto:visionmobbusiness@gmail.com">visionmobbusiness@gmail.com</a>.
        </p>
      </div>

      {/* 10 */}
      <div className="lg-section">
        <h2>10. Cambios en esta Política</h2>
        <p>
          Podemos actualizar esta Política de Privacidad para reflejar cambios en nuestras prácticas o en la normativa aplicable. Los cambios sustanciales serán comunicados en la web con antelación razonable y, si fuera necesario, por email a los usuarios registrados.
        </p>
        <p>
          La versión vigente siempre estará disponible en <strong>visionmob.com/privacidad</strong>.
        </p>
      </div>

      {/* 11 */}
      <div className="lg-section">
        <h2>11. Contacto</h2>
        <p>
          Para cualquier consulta sobre privacidad o el tratamiento de tus datos:
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
          Tu privacidad importa. Si algo de esta política no queda claro o quieres saber más, escríbenos.
        </p>
      </div>
    </LegalLayout>
  );
}
