module.exports = {
  types: [
    { value: "feat", name: "feat: Nueva característica" },
    { value: "fix", name: "fix: Corrección de errores" },
    { value: "docs", name: "docs: Cambios en la documentación" },
    {
      value: "style",
      name:
        "style: Cambios que no afectan al significado del código (espacios en blanco, formato, punto y coma que faltan, etc.)"
    },
    {
      value: "refactor",
      name:
        "refactor: Cambios en el código que no corrige errores ni añade características"
    },
    {
      value: "perf",
      name: "perf: Cambios en el código que mejoran el rendimiento"
    },
    { value: "test", name: "test: Añadir pruebas que faltan" },
    {
      value: "chore",
      name:
        "chore: Cambios en el proceso de construcción o herramientas auxiliares y bibliotecas como la generación de documentación"
    },
    { value: "revert", name: "revert: Revertir a un commit" }
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "button"
      ]
    ]
  },
  scope: "empty",
  scopeOverrides: {
    fix: [{ name: 'merge' }, { name: 'style' }, { name: 'test' }, { name: 'hotfix' }],
  },
  allowBreakingChanges: ["feat", "fix"],
  allowCustomScopes: false,
  messages: {
    type: "Selecciona el tipo de cambio que estás realizando:",
    scope: "Indica el alcance del cambio (opcional):",
    customScope: "Indica el alcance del cambio:",
    subject: "Escribe una descripción corta y concisa del cambio:\n",
    body:
      'Proporciona una descripción más detallada del cambio (opcional). Usa "|" para realizar saltos de línea:\n',
    breaking:
      "Describe cualquier cambio que rompa la compatibilidad (opcional):\n",
    footer:
      'Añade cualquier referencia a tareas, problemas o enlaces de relevancia (opcional). Ej. "#31, #34":',
    confirmCommit: "¿Estás seguro de que deseas proceder con el commit?"
  }
};
