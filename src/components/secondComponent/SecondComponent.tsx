import React, { useState } from "react";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { secondCompoenentdata } from "../../libs/data";

import "./style.css";

// getting type of hard coded Second component data type 
type secondComponentPorps = typeof secondCompoenentdata[number]

const SecondComponent = ({ props }: { props: secondComponentPorps }) => {

    const [checked, setChecked] = useState<boolean[]>(props.sub_departments.map(() => false));

    const [accordionOpen, setaccordionOpen] = useState<boolean>(false);

    // for Parent : Department : Parent Checkbox
    const handleChangeAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked((prev) => {
            const newChecked = prev.map(() => {
                return event.target.checked
            })
            return newChecked
        });
    };

    // for children: subdepartment : Children checkbox
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        setChecked((prev) => {
            const newChecked = prev.map((value, i) => {
                if (i === index) { return event.target.checked; }
                return value

            })
            return newChecked
        });
    };


    return (
        <div
            className="accordion"
        >
            {/* PARENT section */}
            <div className="department" >
                {
                    // button to expand
                    <button
                        onClick={() => setaccordionOpen(!accordionOpen)}
                    >
                        {/* SVG for  plus and minus button to expand parent */}
                        <svg

                            className="svg fill-indigo-500 shrink-0 ml-8"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={` svg2  ${accordionOpen && 'rotate'}`}
                            />
                            <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className={`svg2 rotate1 ${accordionOpen && " rotate "}` }
                            />
                        </svg>
                    </button>
                }
                {/* Name of Department / Parent */}
                <span>
                    <FormControlLabel
                        label={props.department}
                        control={
                            <Checkbox
                                checked={checked[0] && checked[1]}
                                indeterminate={checked[0] !== checked[1]}
                                onChange={handleChangeAll}
                            />
                        }
                    />
                    {/* number of subdepartments */}
                    <span className="numberofsubdepartments">
                        &#40; {props.sub_departments.length} &#41;
                    </span>
                </span>
            </div>


            {/* CHILDREN section*/}
            <div className={
                `subdepartment
                ${accordionOpen === true ? "openedAccordion" : "closedAccordion"}
                `
            }>
                <div className="eachsubdepartment">
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>

                        {
                            props.sub_departments.map((value, index) => (
                                <React.Fragment key={index}>
                                    <FormControlLabel
                                        label={value}
                                        control={<Checkbox checked={checked[index]}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, index)}
                                        />}
                                    />
                                </React.Fragment>
                            ))
                        }
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent