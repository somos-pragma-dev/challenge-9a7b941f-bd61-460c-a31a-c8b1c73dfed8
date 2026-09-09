# Implementación de un componente standalone con signals y nuevo control flow syntax

Se requiere desarrollar un componente standalone que maneje la visualización y actualización de un contador en una aplicación de banca. El componente debe utilizar signals para gestionar el estado y el nuevo control flow syntax para manejar la lógica de actualización. El contador debe ser idempotente y manejar errores de forma adecuada.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Desarrollo de componentes standalone con signals y nuevo control flow syntax |
| **Nivel** | junior-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del componente standalone

**Objetivo:** Crear un componente standalone que muestre un contador.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identificar las propiedades y eventos necesarios para el componente.
- Definir el template y la lógica básica del componente.

**Entregable:** Componente standalone con template y lógica básica.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo manejar el estado del contador de forma idempotente.
- Piensa en posibles errores que podrían ocurrir y cómo manejarlos.

</details>

### Fase 2: Implementación de signals para gestionar el estado

**Objetivo:** Utilizar signals para gestionar el estado del contador.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Implementar signals para actualizar el estado del contador.
- Asegurar que la actualización del estado sea idempotente.

**Entregable:** Componente con signals implementadas para gestionar el estado del contador.

<details>
<summary>Pistas de conocimiento</summary>

- Reflexiona sobre cómo signals puede ayudarte a mantener el estado consistente.
- Considera los posibles modos de falla y cómo manejarlos.

</details>

### Fase 3: Aplicación del nuevo control flow syntax

**Objetivo:** Utilizar el nuevo control flow syntax para manejar la lógica de actualización.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Implementar el nuevo control flow syntax para manejar la lógica de actualización del contador.
- Asegurar que la lógica de actualización maneje adecuadamente los errores.

**Entregable:** Componente con el nuevo control flow syntax implementado para manejar la lógica de actualización.

<details>
<summary>Pistas de conocimiento</summary>

- Reflexiona sobre cómo el nuevo control flow syntax mejora la legibilidad y mantenibilidad del código.
- Considera diferentes escenarios de error y cómo manejarlos con el nuevo control flow syntax.

</details>

### Fase 4: Pruebas y validación del componente

**Objetivo:** Realizar pruebas y validación del componente para asegurar su correcto funcionamiento.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Realizar pruebas unitarias y de integración del componente.
- Validar que el componente maneje adecuadamente los errores y sea idempotente.

**Entregable:** Componente con pruebas unitarias y de integración realizadas y validado.

<details>
<summary>Pistas de conocimiento</summary>

- Considera diferentes casos de prueba para asegurar la idempotencia y el manejo de errores.
- Utiliza herramientas de testing adecuadas para realizar las pruebas.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente standalone y cómo se utiliza en Angular?
- **paraQueSirve**: ¿Para qué sirve utilizar signals en un componente standalone?
- **comoSeUsa**: ¿Cómo se utiliza el nuevo control flow syntax en Angular?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar un componente standalone con signals y nuevo control flow syntax?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de un componente standalone con signals y nuevo control flow syntax?

## Criterios de Evaluacion

- Implementar un componente standalone que muestre un contador.
- Utilizar signals para gestionar el estado del contador de forma idempotente.
- Implementar el nuevo control flow syntax para manejar la lógica de actualización.
- Realizar pruebas unitarias y de integración del componente.
- Validar que el componente maneje adecuadamente los errores y sea idempotente.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
