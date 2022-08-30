import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { assert } from 'console'

const html = fs.readFileSync(path.resolve(__dirname, './student_schedule.html'), 'utf8');
let dom
let container 
const start = "2022-01-01";
const duration = 2;
const end = "2022-01-15";
const calculator = require('./HelperFunctions.js');
describe('HelperFunctions.js', () => {

    test('displays correct end date', ()=> {
        expect(calculator.getEndDate(start, duration)).toBe(end);
    })
})

describe('student_schedule.html', () => {
    it('renders a button element', () =>{
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('button')).toBeInTheDocument()
    })
})
