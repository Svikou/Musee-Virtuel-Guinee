import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const Navigation = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="text-white">
            <BreadcrumbLink href="/voyages">Voyages</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-white" />
          <BreadcrumbItem className="text-white">
            <BreadcrumbLink href="">Djembé</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Navigation;
