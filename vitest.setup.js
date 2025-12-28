// vitest.setup.js
import '@testing-library/jest-dom'  // добавляет матчеры типа toBeInTheDocument, toBeEnabled и т.д.
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Очистка после каждого теста, чтобы компоненты не накапливались
afterEach(() => {
  cleanup()
})

// Если где-то используется ReactDOMTestUtils.act, перенаправим на React.act
import React from 'react'
import { act as reactAct } from 'react-dom/test-utils'
global.act = reactAct