import React from "react";
import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";

import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { MostRecent } from "./MostRecent";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Stack minHeight="100%" maxHeight="100vh">
        <Nav />
        <Stack direction="row" flexWrap="wrap" sx={{ overflow: `auto` }}>
            <Box component="main" style={{ flexGrow: 1, padding: `1rem` }}>
                {children}
            </Box>
            <Stack component="aside" sx={{ minWidth: `18%` }}>
                <Box sx={{ padding: `1rem` }}>
                    <Typography variant="h5" component="h2">
                        Most recent pastes
                    </Typography>
                </Box>
                <MostRecent />
            </Stack>
        </Stack>
        <Footer />
    </Stack>
);