import { Stack } from "@mui/material";
import { NextLink } from "./NextLink";

export const Footer = () => (
    <Stack
        justifySelf="flex-end"
        component="footer"
        direction="row"
        justifyContent="space-evenly"
        padding="1rem"
        flexWrap="wrap"
        gap={1}
        borderTop="1px dashed white"
    >
        <Stack direction="row" gap={1}>
            (c) 2023 <NextLink color="inherit" href="https://www.ivanov.pro">Ivan Ivanov</NextLink>
        </Stack>
    </Stack>
);
