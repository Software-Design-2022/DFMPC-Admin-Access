import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { assert } from 'console'

const html = fs.readFileSync(path.resolve(__dirname, './student_schedule.html'), 'utf8');

let dom
let container 
