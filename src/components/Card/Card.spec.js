import { render, screen } from '@testing-library/react'
import React from 'react'
import Card from "./Card"
import ProgressBar from "./Card"


test('Card renders', ()=>{
    render(<Card/>)
});

test('Progress component renders', ()=>{
    render(<ProgressBar/> )
});

test('Start button renders', ()=>{
    const { getByText } = render(<Card/>);
    const start = getByText(/Start/i)
    expect(start).toBeInTheDocument();
})

test('Reset button renders', ()=>{
    const { getByText } = render(<Card/>);
    const reset = getByText(/Reset/i)
    expect(reset).toBeInTheDocument();
})

