//test events are added to the database

import { fireEvent, getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'
import { assert } from 'console' //import assert from 'assert', used to test if the event was added to the database

const html = fs.readFileSync(path.resolve(__dirname, './add_events.html'), 'utf8');

let dom 
let container

describe('add_events.html', () => {
    
        it('renders a form element', () => {
            dom = new JSDOM(html) //creates a new instance of JSDOM
            container = dom.window.document.body //creates a new instance of the body
            expect(container.querySelector('form')).toBeInTheDocument() //checks if the form is in the document
        })
    
        // test that a button is rendered

        it('renders a button element', () => {
            dom = new JSDOM(html) //creates a new instance of JSDOM
            container = dom.window.document.body //creates a new instance of the body
            expect(container.querySelector('button')).toBeInTheDocument() //checks if the button is in the document
        })

        //test that the form is submitted
        it('form is submitted', () => {
            dom = new JSDOM(html)
            container = dom.window.document.body
            const form = container.querySelector('form')
            const button = container.querySelector('button')
            fireEvent.submit(form)
            expect(button).not.toBeNull()
            expect(getByText(container, 'Submit')).toBeInTheDocument()
        })

        // test event listener is responding to the click event
        it('button is clicked', () => {
            dom = new JSDOM(html)
            container = dom.window.document.body
            const button = container.querySelector('button')
            fireEvent.click(button)
            expect(button).not.toBeNull()
            expect(getByText(container, 'Submit')).toBeInTheDocument()
        })
        
    
})

