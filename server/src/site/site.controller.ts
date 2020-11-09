import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateSiteDto } from './entities/createSite.dto';

@Controller('site')
export class SiteController {

  // @Get('ftp')  ->  GET /site/ftp
  @Get()
  async sitesList() {
    return 'This may be sites list'
  }

  @Get(':id')
  async siteItem(@Param('id') id: string) {
    return `This may be site item with ID ${id}`
  }

  @Post('/create')
  async createSite(
    @Body() createSiteDto: CreateSiteDto
  ) {
    return 'This may be controls for create a new site'
  }

  @Put('/edit:id')
  async editSite(
    @Param('id') id: string,
    @Body() createSiteDto: CreateSiteDto
  ){
    return 'This may be controls for edit site details'
  }

  @Delete('/delete/:id')
  async deleteSite(
    @Param('id') id: string
  ){
    return `This may be response about remove site with ID ${id}`

  }
}
