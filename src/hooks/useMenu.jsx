import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenut] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);

                setMenut(data);
                setLoading(false);
            })
    }, [])

    return [menu, loading]
}

export default useMenu;