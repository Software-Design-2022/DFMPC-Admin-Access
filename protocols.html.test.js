import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { assert } from 'console'

const html = fs.readFileSync(path.resolve(__dirname, './protocols.html'), 'utf8');

let dom
let container 


describe('protocols.html', () => {

    it('renders a table element', () => {
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('table')).toBeInTheDocument()
    })

    it('renders a button element', () => {
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('button')).toBeInTheDocument()
    })

    
    
})
