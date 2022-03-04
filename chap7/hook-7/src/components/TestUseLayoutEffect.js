import React, { useEffect, useLayoutEffect } from "react";

export default function TEstUseLayoutEffect() {
    useEffect(() => console.log("useEffect"));
    useLayoutEffect(() => console.log("useLayoutEffect"));
    return <div>ready</div>;
}
