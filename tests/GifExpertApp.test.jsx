import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


// TODO testear componente

describe('test component', () => { 
    
    test('should first', () => { 
        
        
        render(<GifExpertApp/>);
        screen.debug();

     })
 })