"use client"
import React, { useState } from 'react'
import Box from '@/components/Box/Box'

const Date = () => {
    const [value, setValue] = useState<string[]>(['', '', '', '']);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = e.target.value.slice(0, 1);
        const newUsernameArray = [...value];
        newUsernameArray[index] = newValue;
        setValue(newUsernameArray);
    
        // Automatically move focus to the next input field
        if (newValue && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      };
    
    return (
        <div className='flex'>
            <p>
                <Box/>
            </p>


        </div>
    )
}

export default Date