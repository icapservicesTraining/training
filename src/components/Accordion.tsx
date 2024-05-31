import { useState } from 'react';

/**
 * Composant qui permet d'afficher mes sections
 * @param props 
 * @returns 
 */
export default function Accordion(
  props: {
    isOn: Boolean, //ouvrir ou non par défaut la section
    title: string, //titre de la section
    children: JSX.Element, //passage du composant 
 })
 {

const isOn:Boolean=props.isOn;

const [openAccordion, setOpenAccordion]=useState<Boolean>(isOn);

  return (
    <div>
      <div>
        <button onClick={()=>setOpenAccordion(!openAccordion)} className={openAccordion ? 'text-indigo-50' : 'text-amber-700'}>{props.title}</button>
        <div className="flex justify-center">
        <div className={openAccordion ? 'visible' : 'invisible h-0'} >
          {props.children}
        </div></div>
      </div>
    </div>
  );
}