import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
    return (
<Badge badgeContent={3} color="primary">
        <ShoppingCart/>
</Badge>

 );
}

export default CartWidget;