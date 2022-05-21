import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './home.html'), 'utf8');

let dom
let container 

describe('home.html', () => {

    it('renders a button element', () => {
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('button')).toBeInTheDocument()
    })

    it('renders a button element with text "Users"', () => {
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('span').textContent).toBe('Toggle navigation')
    })

    it('renders a button element', () => {
        expect(container.querySelector('button')).not.toBeNull()
        expect(getByText(container, 'Sign Out')).toBeInTheDocument()
    })
})