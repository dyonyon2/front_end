import React, { useCallback } from "react";
import { TextInput } from "@sanity/ui";
import { FormField } from "@sanity/base/components";
import AceEditor from "react-ace";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";

import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/mode-javascript";

const CodeInput = React.forwardRef((props, ref) => {
    const {
        type, // Schema information
        value, // Current field value
        readOnly, // Boolean if field is not editable
        placeholder, // Placeholder text from the schema
        markers, // Markers including validation rules
        presence, // Presence information for collaborative avatars
        compareValue, // Value to check for "edited" functionality
        onFocus, // Method to handle focus state
        onBlur, // Method to handle blur state
        onChange,
    } = props;

    const codeChange = useCallback((code) => {
        onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    });

    return (
        <FormField
            description={type.description} // Creates description from schema
            title={type.title} // Creates label from schema title
            __unstable_markers={markers} // Handles all markers including validation
            __unstable_presence={presence} // Handles presence avatars
            compareValue={compareValue} // Handles "edited" status
        >
            {/* <TextInput
                value={value || ""} // Current field value
                readOnly={readOnly} // If "readOnly" is defined make this field read only
                placeholder={placeholder} // If placeholder is defined, display placeholder text
                onFocus={onFocus} // Handles focus events
                onBlur={onBlur} // Handles blur events
                ref={ref}
            /> */}
            <AceEditor
                width="100%"
                theme="github"
                style={{
                    boxShadow: "0 0 0 1px #cadidc",
                    lineHeight: 1.6,
                }}
                mode="javascript"
                name="ace-editor-code"
                value={value}
                tabSize={2}
                setOptions={{ useWorker: false }}
                ref={ref}
                onChange={onChange}
            />
        </FormField>
    );
});

export default CodeInput;
