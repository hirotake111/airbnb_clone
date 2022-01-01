import { current } from "@reduxjs/toolkit";
import { useMemo, useState } from "react";
import { InspirationHeader, InspirationHeaderName } from "../types/types";

interface Data {
  highlighted: InspirationHeaderName;
  headers: InspirationHeader[];
}

export const useCountryData = () => {
  const [menuData, setMenuDate] = useState<Data>(defaultData);

  const highlightedHeader = useMemo<InspirationHeader>(() => {
    const filtered = menuData.headers.find(
      (h) => h.headerName === menuData.highlighted
    );
    return filtered ? filtered : menuData.headers[0];
  }, [menuData]);

  const headers = menuData.headers;

  const updateHighlightedHeader = (key: InspirationHeaderName) => {
    setMenuDate((current) => ({ ...current, highlighted: key }));
  };

  return { headers, highlightedHeader, updateHighlightedHeader };
};

const defaultData: Data = {
  highlighted: "Destinations for arts & culture",

  headers: [
    {
      headerName: "Destinations for arts & culture",
      locations: [
        { primary: "Phoenix", secondary: "Arizona" },
        { primary: "Hot Springs", secondary: "Arkansas" },
        { primary: "Los Angeles", secondary: "California" },
        { primary: "San Diego", secondary: "California" },
        { primary: "San Francisco", secondary: "California" },
        { primary: "Barcelona", secondary: "Catalonia" },
        { primary: "Prague", secondary: "Czechia" },
        { primary: "Washington", secondary: "District of Columbia" },
        { primary: "Keswick", secondary: "England" },
        { primary: "London", secondary: "England" },
        { primary: "Scarborough", secondary: "England" },
      ],
    },
    {
      headerName: "Destinations for outdoor adventure",
      locations: [
        { primary: "Lake Martin", secondary: "Alabama" },
        { primary: "Banff", secondary: "Alberta" },
        { primary: "Nerja", secondary: "Andalucía" },
        { primary: "Greer", secondary: "Arizona" },
        { primary: "Lake Havasu City", secondary: "Arizona" },
        { primary: "Lake Powell", secondary: "Arizona" },
        { primary: "North Rim", secondary: "Arizona" },
        { primary: "Payson", secondary: "Arizona" },
        { primary: "Pinetop-Lakeside", secondary: "Arizona" },
        { primary: "Red Rock", secondary: "Arizona" },
        { primary: "Dinner Plain", secondary: "Australia" },
      ],
    },
    {
      headerName: "Mountain cabins",
      locations: [
        { primary: "Mentone", secondary: "Alabama" },
        { primary: "Sedona", secondary: "Arizona" },
        { primary: "Helen", secondary: "Georgia" },
        { primary: "Pine Mountain", secondary: "Georgia" },
        { primary: "Stone Mountain", secondary: "Georgia" },
        { primary: "Island Park", secondary: "Idaho" },
        { primary: "Blue Mountains", secondary: "New South Wales" },
        { primary: "Asheville", secondary: "North Carolina" },
        { primary: "Blowing Rock", secondary: "North Carolina" },
        { primary: "Boone", secondary: "North Carolina" },
        { primary: "Hochatown", secondary: "Oklahoma" },
      ],
    },
    {
      headerName: "Beach destinations",
      locations: [
        { primary: "Dauphin Island", secondary: "Alabama" },
        { primary: "Fort Morgan", secondary: "Alabama" },
        { primary: "Gulf Shores", secondary: "Alabama" },
        { primary: "Bruny Island", secondary: "Australia" },
        { primary: "Crescent Head", secondary: "Australia" },
        { primary: "Gerringong", secondary: "Australia" },
        { primary: "Hamilton Island", secondary: "Australia" },
        { primary: "Lancelin", secondary: "Australia" },
        { primary: "Melbourne Beach", secondary: "Australia" },
        { primary: "Moonta Bay", secondary: "Australia" },
        { primary: "Ocean Grove", secondary: "Australia" },
      ],
    },
    {
      headerName: "Popular destinations",
      locations: [
        { primary: "Canmore", secondary: "Alberta" },
        { primary: "Benalmadena", secondary: "Andalusia" },
        { primary: "Marbella", secondary: "Andalusia" },
        { primary: "Mijas", secondary: "Andalusia" },
        { primary: "Prescott", secondary: "Arizona" },
        { primary: "Scottsdale", secondary: "Arizona" },
        { primary: "Tucson", secondary: "Arizona" },
        { primary: "Jasper", secondary: "Arkansas" },
        { primary: "Mountain View", secondary: "Arkansas" },
        { primary: "Devonport", secondary: "Australia" },
        { primary: "Mallacoota", secondary: "Australia" },
      ],
    },
    {
      headerName: "Unique Stays",
      locations: [
        { primary: "Cabins", secondary: "United States" },
        { primary: "Treehouses", secondary: "United States" },
        { primary: "Glamping", secondary: "United States" },
        { primary: "Tiny Houses", secondary: "United States" },
        { primary: "Beach Houses", secondary: "United States" },
        { primary: "Campers and RVs", secondary: "United States" },
        { primary: "Lakehouses", secondary: "United States" },
      ],
    },
  ],
};
