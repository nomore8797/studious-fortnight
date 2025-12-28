// Подключаем дополнительные матчеры для Testing Library
import '@testing-library/jest-dom'

// Импортим утилиты для работы с DOM
import { screen, fireEvent, within } from '@testing-library/react'

// Делаем глобальными для тестов
global.screen = screen
global.fireEvent = fireEvent
global.within = within