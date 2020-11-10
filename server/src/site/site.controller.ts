import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';
import { ValidatorPipe } from '../common/pipes/validation.pipe';
import { CreateSiteDto } from './dto/createSite.dto';
import { SiteService } from './site.service';

@UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
@Controller('site')
export class SiteController {

  constructor(private readonly siteService: SiteService) { }

  // @Get('ftp')  ->  GET /site/ftp
  @Get()
  async sitesList() {
    return this.siteService.sitesList()
    // return 'This may be sites list'
  }

  @Get(':id')
  async siteItem(
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number
  ) {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // throw new HttpException({
    //   status: HttpStatus.FORBIDDEN,
    //   message: 'FORBIDDEN('
    // }, HttpStatus.FORBIDDEN);
    return this.siteService.site(id)
    // return `This may be site item with ID ${id}`
  }

  @Post('/create')
  // @UsePipes(new ValidatorPi  pe(SiteSchema))
  @UseFilters(HttpExceptionFilter)
  async createSite(
    @Body(ValidatorPipe) createSiteDto: CreateSiteDto
  ) {
    this.siteService.create(createSiteDto)
    // throw new ForbiddenException()
    return 'This may be controls for create a new site'
  }

  @Put('/edit:id')
  async editSite(
    @Param('id') id: string,
    @Body() createSiteDto: CreateSiteDto
  ) {
    return 'This may be controls for edit site details'
  }

  @Delete('/delete/:id')
  @Roles('admin')
  async deleteSite(
    @Param('id') id: string
  ) {
    return `This may be response about remove site with ID ${id}`

  }
}
