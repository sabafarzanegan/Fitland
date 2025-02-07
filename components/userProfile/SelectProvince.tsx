"use client";

import { City, State } from "@/utils/type";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/Input/Input";

function SelectProvince() {
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedState, setSelectedState] = useState("");
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    const getStates = async () => {
      try {
        const res = await fetch(
          " https://iranplacesapi.liara.run/api/Provinces"
        );
        const data = await res.json();

        setStates(data);
      } catch (error) {
        console.log(error);
      }
    };
    getStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const getCitis = async () => {
        try {
          const res = await fetch(
            `  https://iranplacesapi.liara.run/api/Provinces/id/${selectedState}/cities`
          );
          const data = await res.json();

          setCities(data);
        } catch (error) {
          console.log(error);
        }
      };
      getCitis();
    }
  }, [selectedState]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="relative w-full ">
        <label
          htmlFor="province"
          className="absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1">
          استان
        </label>
        <select
          {...register("state")}
          onChange={(e) => {
            const selectedId = e.target.value;
            setSelectedState(selectedId);

            const stateName =
              states.find((state) => state.id == Number(selectedId))?.name ||
              "";

            setValue("state", stateName);
          }}
          id="province"
          name="province"
          className="w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none  focus:border-secondary-400">
          <option></option>
          {states.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.state && (
          <p className="text-red-500 text-sm">
            {errors.state.message as string}
          </p>
        )}
      </div>

      <div className="relative w-full ">
        <label
          htmlFor="province"
          className="absolute -top-3 left-3 text-sm text-gray-500 bg-white px-1">
          شهر
        </label>
        <select
          {...register("city")}
          className="w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-1  focus:ring-secondary-400">
          {cities?.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {errors.city && (
          <p className="text-red-500 text-sm">
            {errors.city.message as string}
          </p>
        )}
      </div>
      <Input title="پلاک" {...register("number")} />
      {errors.number && (
        <p className="text-red-500 text-sm">
          {errors.number.message as string}
        </p>
      )}
      <Input title="واحد" {...register("unit")} />
      {errors.unit && (
        <p className="text-red-500 text-sm">{errors.unit.message as string}</p>
      )}
      <Input title="کدپستی" {...register("zipcode")} />
      {errors.zipcode && (
        <p className="text-red-500 text-sm">
          {errors.zipcode.message as string}
        </p>
      )}
    </div>
  );
}

export default SelectProvince;
