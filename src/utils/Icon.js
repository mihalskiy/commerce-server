import React from 'react';

export const Icon = ({ className, color, icon, size = 24 }) => {
  const Icons = {
    twitter: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    ),
    dribbble: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M16.42 18.42C16 16.5 15.5 14.73 15 13.17c.5-.07 1-.11 1.58-.11h.02c.93 0 1.95.12 3.06.37-.38 2.07-1.58 3.84-3.24 4.99M12 19.8c-1.74 0-3.34-.57-4.64-1.54.28-.45.87-1.32 1.82-2.22.96-.93 2.32-1.89 4.05-2.46.59 1.67 1.13 3.57 1.54 5.71-.86.33-1.77.51-2.77.51M4.2 12v-.11c.22.01.51.01.85.01h.01c1.56-.01 4.3-.14 7.08-1.01.15.33.3.67.45 1.03-1.86.62-3.32 1.61-4.4 2.58-1.03.96-1.74 1.89-2.15 2.5-1.14-1.34-1.84-3.09-1.84-5m4.35-7c.55.65 1.63 2.06 2.79 4.25-2.34.71-4.73.87-6.16.87h-.13c-.24 0-.45 0-.62-.01C5 7.87 6.5 6 8.55 5M12 4.2c1.84 0 3.53.64 4.86 1.71C15.84 7.14 14.5 8 13.03 8.65 12 6.67 11 5.25 10.34 4.38c.54-.11 1.09-.18 1.66-.18m6.13 2.98c.97 1.24 1.58 2.78 1.66 4.45-1.13-.24-2.19-.35-3.19-.35h-.01c-.8 0-1.55.07-2.26.19-.17-.42-.33-.82-.52-1.21 1.58-.69 3.09-1.68 4.32-3.08M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
      </svg>
    ),
    email: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.11-.9-2-2-2z" />
      </svg>
    ),
    menu: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M2 13h16v-2H2zm0 7h20v-2H2zM2 6h20V4H2z" />
      </svg>
    ),
      facebook: () => (
    <svg lassName={className} fill={color || 'white'} width={size} height={size} viewBox="0 0 96.124 96.123">
	<path fill={color} d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
		c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
		c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
		c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"/>
    </svg>
    ),
    user: () => (
        <svg viewBox="0 0 549.907 549.908" className={className} fill={color} width={size} height={size}>
        <g>
            <path d="M110.534,220.962c0-49.027,39.741-88.768,88.768-88.768s88.768,39.741,88.768,88.768c0,49.026-39.741,88.768-88.768,88.768
                S110.534,269.989,110.534,220.962z M236.968,315.783h-75.327c-62.668,0-113.655,50.986-113.655,113.646v92.143l0.236,1.437
                l6.36,1.985c59.796,18.679,111.764,24.914,154.531,24.914c83.531,0,131.94-23.82,134.938-25.333l5.94-3.015l0.626,0.006v-92.137
                C350.617,366.769,299.631,315.783,236.968,315.783z M350.617,177.533c49.024,0,88.768-39.741,88.768-88.768
                C439.385,39.741,399.642,0,350.617,0c-49.023,0-88.768,39.741-88.768,88.765C261.85,137.792,301.594,177.533,350.617,177.533z
                 M388.28,183.585h-75.326c-1.797,0-3.547,0.189-5.32,0.275c6.81,14.295,10.74,30.225,10.74,47.094
                c0,31.129-13.057,59.205-33.922,79.23c48.823,14.523,86.144,55.986,94.638,107.08c71.999-3.145,113.504-23.49,116.265-24.885
                l5.94-3.015l0.626,0.012v-92.137C501.933,234.575,450.946,183.585,388.28,183.585z"/>
        </g>
        </svg>

    ),
    arrowRight: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M3 11h14.17l-3.58-3.59L15 6l6 6-6 6-1.41-1.41L17.17 13H3z" />
      </svg>
    ),
    chevronRight: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    ),
    close: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </svg>
    ),
    send: () => (
      <svg className={className} fill={color} width={size} height={size} viewBox="0 0 24 24">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    ),
  }

  return Icons[icon]();
};

export const facebookIcon = (
    <svg viewBox="0 0 512 512">
        <path d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159
        c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44
        c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0
        c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0
        c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258
        v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"/>
    </svg>
);

export const googleIcon = (
    <svg viewBox="0 0 458.246 458.246">
        <path d="M160.777,259.368h71.594c-12.567,35.53-46.603,61.004-86.45,60.71
                c-48.349-0.357-88.327-39.035-90.204-87.349c-2.012-51.789,39.537-94.563,90.887-94.563c23.479,0,44.905,8.946,61.058,23.605
                c3.826,3.473,9.65,3.495,13.413-0.047l26.296-24.749c4.112-3.871,4.127-10.408,0.027-14.292
                c-25.617-24.269-59.981-39.396-97.876-40.136C68.696,80.969,0.567,147.238,0.004,228.078
                c-0.568,81.447,65.285,147.649,146.6,147.649c78.199,0,142.081-61.229,146.36-138.358c0.114-0.967,0.189-33.648,0.189-33.648
                H160.777c-5.426,0-9.824,4.398-9.824,9.824v35.999C150.953,254.97,155.352,259.368,160.777,259.368z"/>
        <path d="M414.464,206.99v-35.173c0-4.755-3.854-8.609-8.609-8.609h-29.604c-4.755,0-8.609,3.854-8.609,8.609
                v35.173h-35.173c-4.755,0-8.609,3.854-8.609,8.609v29.604c0,4.755,3.854,8.609,8.609,8.609h35.173v35.173
                c0,4.755,3.854,8.609,8.609,8.609h29.604c4.755,0,8.609-3.854,8.609-8.609v-35.173h35.173c4.755,0,8.609-3.854,8.609-8.609v-29.604
                c0-4.755-3.854-8.609-8.609-8.609L414.464,206.99L414.464,206.99z"/>
    </svg>
);

export const passwordIcon = (
    <svg viewBox="0 0 512 512">
        <path d="M437.333,192h-32v-42.667C405.333,66.99,338.344,0,256,0S106.667,66.99,106.667,149.333V192h-32
                C68.771,192,64,196.771,64,202.667v266.667C64,492.865,83.135,512,106.667,512h298.667C428.865,512,448,492.865,448,469.333
                V202.667C448,196.771,443.229,192,437.333,192z M287.938,414.823c0.333,3.01-0.635,6.031-2.656,8.292
                c-2.021,2.26-4.917,3.552-7.948,3.552h-42.667c-3.031,0-5.927-1.292-7.948-3.552c-2.021-2.26-2.99-5.281-2.656-8.292l6.729-60.51
                c-10.927-7.948-17.458-20.521-17.458-34.313c0-23.531,19.135-42.667,42.667-42.667s42.667,19.135,42.667,42.667
                c0,13.792-6.531,26.365-17.458,34.313L287.938,414.823z M341.333,192H170.667v-42.667C170.667,102.281,208.948,64,256,64
                s85.333,38.281,85.333,85.333V192z"/>
    </svg>
);

export const userIcon = (
    <svg viewBox="0 0 409.165 409.164">
        <path d="M204.583,216.671c50.664,0,91.74-48.075,91.74-107.378c0-82.237-41.074-107.377-91.74-107.377
                c-50.668,0-91.74,25.14-91.74,107.377C112.844,168.596,153.916,216.671,204.583,216.671z"/>
        <path d="M407.164,374.717L360.88,270.454c-2.117-4.771-5.836-8.728-10.465-11.138l-71.83-37.392
                c-1.584-0.823-3.502-0.663-4.926,0.415c-20.316,15.366-44.203,23.488-69.076,23.488c-24.877,0-48.762-8.122-69.078-23.488
                c-1.428-1.078-3.346-1.238-4.93-0.415L58.75,259.316c-4.631,2.41-8.346,6.365-10.465,11.138L2.001,374.717
                c-3.191,7.188-2.537,15.412,1.75,22.005c4.285,6.592,11.537,10.526,19.4,10.526h362.861c7.863,0,15.117-3.936,19.402-10.527
                C409.699,390.129,410.355,381.902,407.164,374.717z"/>
    </svg>
);
