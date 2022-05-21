import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

let dom
let container 

describe('index.html', () => {

    
    
    
    
    it('renders a button element', () => {
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('button')).toBeInTheDocument()
    })
    
    it('renders a button element with text "Login"', () => {
        dom = new JSDOM(html)
        container = dom.window.document.body
        expect(container.querySelector('button').textContent).toBe('Sign in')
    })

    it('renders a button element', () => {
        expect(container.querySelector('button')).not.toBeNull()
        expect(getByText(container, 'Sign in')).toBeInTheDocument()
    })

    it('renders a button element with text "Login"', () => {
        expect(container.querySelector('button').textContent).toBe('Sign in')
    })




})
