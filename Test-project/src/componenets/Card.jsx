import React from 'react'
 import {
   Card,
   CardHeader,
   CardBody,
   CardFooter,
   Typography,
   Button,
 } from "@material-tailwind/react";

 

const DessertCard = (props) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center ">
        <Card className="w-96 ">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={props.img}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {props.title}
              </Typography>
              <Typography color="blue-400" className="font-medium">
                {props.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-bold text-black opacity-205"
            >
              {props.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default DessertCard



