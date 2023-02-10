import React, { Fragment } from "react";
import { Paper, Typography, Stack, Divider, Box } from "@mui/material";
import {
  Timeline,
  timelineItemClasses,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { alpha, styled } from "@mui/material/styles";

const YearsText = styled(Typography)(({ theme }) => ({
  color: alpha(theme.palette.text.primary, 0.6),
}));

const ProfileEduction = ({ title, list }) => {
  return (
    <Paper sx={{ mt: 2, p: 3, pb: 5 }}>
      <Typography variant="h3">{title}</Typography>
      {list.map(({ img, name, title, years, subList }, i) => (
        <Fragment key={name + i}>
          <Stack direction="row" mt={3}>
            <Box style={{ width: 48, height: 48 }}>
              <img
                src={img ?? "/images/NoImage.png"}
                alt={`${name ?? "noItem-"} logo`}
                width="100%"
              />
            </Box>
            <Stack ml={1} justifyContent="center">
              {name && <Typography variant="subtitle1">{name}</Typography>}
              {title && <Typography variant="body2">{title}</Typography>}
              {years && <YearsText variant="body2">{years}</YearsText>}
            </Stack>
          </Stack>
          <SubList subList={subList} />
          {i !== list.length - 1 && <Divider style={{ marginTop: 15 }} />}
        </Fragment>
      ))}
    </Paper>
  );
};

const SubList = ({ subList }) => {
  if (!subList) return;

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {subList?.map(({ title, years }, i) => (
        <TimelineItem key={title + years + i}>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent ml={1.8}>
            {title && <Typography variant="subtitle2">{title}</Typography>}
            {years && <YearsText variant="body2">{years}</YearsText>}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProfileEduction;
