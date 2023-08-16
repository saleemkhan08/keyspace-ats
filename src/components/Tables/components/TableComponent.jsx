import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  useColorModeValue,
  Select,
  ButtonGroup,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
// import TableCell from "./TableCell";
import PropTypes from "prop-types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import React, { useEffect } from "react";

const TableComponent = ({
  hideTitle,
  title,
  actions,
  config: columns,
  data,
  total,
  allowSorting,
}) => {
  // TODO add total count UI
  const textColor = useColorModeValue("gray.700", "white");
  const [searchParams, setSearchParams] = useSearchParams();
  const tableId = title.replace(/\s/g, "");
  const sortFieldName = `${tableId}SortFieldName`;
  const sortDirection = `${tableId}SortDirection`;
  const pageSize = `${tableId}PageSize`;
  const pageNo = `${tableId}PageNo`;

  // Set default page size
  useEffect(() => {
    searchParams.set(pageSize, 10);
    setSearchParams(searchParams);
  }, []);

  // const currentSortField = searchParams.get(sortFieldName);
  const currentPageNo = parseInt(searchParams.get(pageNo)) || 1;
  const handlePrevPage = () => {
    searchParams.set(pageNo, currentPageNo - 1);
    setSearchParams(searchParams);
  };

  const handleNextPage = () => {
    searchParams.set(pageNo, currentPageNo + 1);
    setSearchParams(searchParams);
  };

  return (
    <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }} mb="20px">
      {!hideTitle && (
        <CardHeader p="12px 0px 28px 0px">
          <Flex direction="row" justify="space-between" w="100%">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              {title}
            </Text>
            <Flex justify="end">{actions}</Flex>
          </Flex>
        </CardHeader>
      )}
      <Table variant="simple" color={textColor}>
        <Thead>
          <Tr my=".8rem" ps="0px">
            {columns.map((col, idx) => {
              const sortDir = searchParams.get(sortDirection);
              const sortField = searchParams.get(sortFieldName);
              let sortDirIcon = null;
              if (sortField === col.id) {
                if (sortDir === "asc") {
                  sortDirIcon = <TriangleDownIcon />;
                } else if (sortDir === "desc") {
                  sortDirIcon = <TriangleUpIcon />;
                }
              }
              return (
                <Th
                  color="gray.400"
                  key={col.id}
                  ps={idx === 0 ? "0px" : null}
                  cursor="default"
                >
                  <div>
                    {allowSorting ? (
                      <Button
                        variant="ghost"
                        w="100%"
                        p="0"
                        rightIcon={sortDirIcon}
                        onClick={() => {
                          searchParams.set(sortFieldName, col.id);
                          searchParams.set(
                            sortDirection,
                            sortDir === "asc" ? "desc" : "asc"
                          );
                          setSearchParams(searchParams);
                        }}
                      >
                        {col.name}
                      </Button>
                    ) : (
                      col.name
                    )}
                  </div>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((row, idx) => (
            <Tr key={idx}>
              {columns.map((col) => {
                return (
                  <React.Fragment key={col.id}>
                    {col.component(row)}
                  </React.Fragment>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {total && currentPageNo && (
        <Flex
          direction="row"
          alignItems="center"
          justify="space-between"
          w="100%"
        >
          <Select
            variant="filled"
            placeholder="Page Size"
            onChange={(event) => {
              searchParams.set(pageSize, event.target.value);
              setSearchParams(searchParams);
            }}
            w="120px"
          >
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Select>
          <Text>{`${currentPageNo} / ${total}`}</Text>
          <ButtonGroup isAttached variant="solid">
            <Button
              leftIcon={<ArrowLeftIcon />}
              onClick={handlePrevPage}
              disabled={currentPageNo <= 1}
            >
              Prev
            </Button>
            <Button
              disabled={currentPageNo >= total}
              rightIcon={<ArrowRightIcon />}
              onClick={handleNextPage}
            >
              Next
            </Button>
          </ButtonGroup>
        </Flex>
      )}
    </Card>
  );
};

TableComponent.propTypes = {
  config: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default TableComponent;
